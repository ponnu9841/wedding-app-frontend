import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

export type TextEditorProps = {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  height?: number;
  error?: string;
};

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false], paragraph: [true, false] }],
    ["bold", "italic", "underline", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "indent",
  "link",
];

export default function TextEditor(props: TextEditorProps) {
  const { value, setValue, placeholder = "", height, error } = props;
  const h = height ? `min-h-[${height}px]` : "min-h-[170px]";

  return (
    <div
      className={cn(
        `w-full rounded [&_.ql-container]:max-h-[100px] relative`,
        h
      )}
    >
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(e) => setValue(e)}
        modules={modules}
        formats={formats}
        className="h-full border-red-200 rounded"
        placeholder={placeholder}
      />
    </div>
  );
}
