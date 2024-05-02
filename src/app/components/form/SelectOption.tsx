interface SelectOption {
    name:string
}

export default function SelectOption({name}: SelectOption) {
  return (
    <option>{name}</option>
  )
}
