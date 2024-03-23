import { createImageNamePath } from "../utils/helpers";
import supabase from "./supabase";

export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error !== null) {
    console.log(error);
    throw new Error("Cabins could not be load");
  }
  return cabins;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error !== null) {
    console.log(error);
    throw new Error("Cabins could not be delete");
  }
  return;
}

export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id);

  const hasImageFile = newCabin.image.constructor.name === "File";

  const { imageName, imagePath } = createImageNamePath(newCabin.image.name);

  // 1. create/edit a cabin
  let query = supabase.from("cabins");
  // a) create new cabin
  if (!id)
    query = query.insert([{ ...newCabin, image: hasImageFile ? imagePath : newCabin.image }]);

  // b) edit cabin
  if (id)
    query = query
      .update({ ...newCabin, image: hasImageFile ? imagePath : newCabin.image })
      .eq("id", id);

  const { data: cabins, error } = await query.select().single();

  if (error !== null) {
    console.log(error);
    throw new Error("Cabins could not be load");
  }

  // upload the cabin image
  if (hasImageFile) {
    const { data, error: storageError } = await supabase.storage
      .from("cabins-images")
      .upload(imageName, newCabin.image, {
        cacheControl: "3600",
        upsert: false,
      });
    console.log("image info", data);

    // delete cabin if there's an error uploading the image
    if (storageError) {
      supabase.from("cabins").delete().eq("id", cabins.id);
      throw new Error("Error uploading image, cabin couldn't be created");
    }
  }

  return cabins;
}
