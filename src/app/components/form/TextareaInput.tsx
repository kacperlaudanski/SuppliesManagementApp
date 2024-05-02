interface Textarea {
    placeholder:string
}

export default function TextareaInput({placeholder}: Textarea) {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full h-[100px] p-4 rounded-md resize-none outline-none"
    ></textarea>
  );
}
