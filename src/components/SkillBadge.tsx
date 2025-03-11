import Image from "next/image";

interface SkillBadgeProps {
  name: string;
  icon?: string;
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
      <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full 
          border border-gray-300 
          dark:bg-white/10 
          transition-transform hover:scale-110`}
      >
          {icon && icon.trim() !== "" && (
              <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className="w-5 h-5"
              />
          )}
        <span className="text-[15px] font-medium">{name}</span>
      </div>
  );
}
