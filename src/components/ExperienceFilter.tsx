interface ExperienceFilterProps {
    filters: string[];
    selectedTags: string[];
    onTagSelect: (tag: string) => void;
}

export default function ExperienceFilter({
                                             filters,
                                             selectedTags,
                                             onTagSelect,
                                         }: ExperienceFilterProps) {
    return (
        <div className="mb-6 flex flex-wrap gap-3">
            <span className="font-semibold">Filter by technology:</span>
            {filters.map((filter) => {
                const isSelected = selectedTags.includes(filter);
                return (
                    <button
                        key={filter}
                        onClick={() => onTagSelect(filter)}
                        className={`
              px-3 py-1 rounded-full text-sm
              border 
              ${isSelected ? "bg-foreground text-background" : "bg-background text-foreground border-foreground/40"}
              hover:shadow-md transition
            `}
                    >
                        {filter}
                    </button>
                );
            })}
        </div>
    );
}
