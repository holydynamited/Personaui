import { ChevronRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function EditProfileHeader() {
  return (
    <div className="relative flex items-center space-x-2 border-b border-border-strong px-4 py-4 text-muted">
      <Link to="/profile">
        <button className="flex items-center gap-2">
          <Menu size={18} className="text-muted" />
          Profile
        </button>
      </Link>

      <ChevronRight size={18} className="text-muted" />

      <div className="relative py-1 text-accent">
        <span>Edit profile</span>

        <span
          className="
            absolute
            left-0
            right-0
            -bottom-[18px]
            h-0.5
            bg-accent
          "
        />
      </div>

     
    </div>
  );
}