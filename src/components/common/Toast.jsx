import { Sparkles } from "lucide-react";

export default function Toast({ message }) {
  return message ? <div className="toast" role="status"><Sparkles size={16} />{message}</div> : null;
}
