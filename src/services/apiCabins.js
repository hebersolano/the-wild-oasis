import supabase, { supabaseUrl } from "./supabase";

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

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;
  // https://cvgvnkcsrpnnqqnnxerq.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg?t=2024-03-19T03%3A06%3A56.367Z

  // create new cabin
  const { data: cabins, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error !== null) {
    console.log(error);
    throw new Error("Cabins could not be load");
  }

  // upload the cabin image
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
  return;
}
