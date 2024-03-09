import { supabase } from "src/utils/supabaseClient";

export async function fetchCompanies() {
  const { data, error } = await supabase
    .from('companies')
    .select('*')
  console.log(data, error)
  return data;
}

export async function fetchCompany(name) {
  const { data } = await supabase
    .from('companies')
    .select('*')
    .eq('name', name)
  // TODO: 값이 없을 때 대응
  return data[0];
}