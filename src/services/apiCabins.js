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

export async function createCabin(newCabin) {
  const { data: cabins, error } = await supabase.from("cabins").insert([newCabin]).select();

  if (error !== null) {
    console.log(error);
    throw new Error("Cabins could not be load");
  }
  return cabins;
}
