export const getDate = (value: any) => {
  const NewDate = new Date(value);
  const yyyy = NewDate.getFullYear();
  const mm = String(NewDate.getMonth() + 1).padStart(2, "0");
  const dd = String(NewDate.getDate() + 1).padStart(2, "0");
  const hh = ("0" + NewDate.getHours()).slice(-2);
  const MM = ("0" + NewDate.getMinutes()).slice(-2);

  return `${yyyy}-${mm}-${dd} ${hh}:${MM}`;
};
