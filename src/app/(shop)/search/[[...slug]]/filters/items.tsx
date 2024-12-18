import CheckBox from "@/components/ui/checkBox";
import SearchBar from "@/components/ui/searchBar";
import React, { useState } from "react";

export type ItemFilterType = {
  value: string;
  label: string;
};
type itemType = "checkbox" | "button";
type ItemsProps = {
  onChange: (value: string) => void;
  itemType?: itemType;
  itemVarient?: React.ComponentType;
  items: ItemFilterType[];
};
const Items = ({ items, onChange, itemType = "checkbox" }: ItemsProps) => {
  const [query, setQuery] = useState<string>("");
  const filteredItems = items.filter(item => {
    return item.label.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="flex flex-col gap-2 py-4">
      <SearchBar value={query} onChange={e => setQuery(e.target.value)} />
      {filteredItems.length > 0 ? (
        filteredItems.map((item, i) => (
          <Item
            key={item.value}
            item={item}
            onChange={onChange}
            type={itemType}
            isLast={i === filteredItems.length - 1}
          />
        ))
      ) : (
        <p className="text-lg">No items found</p>
      )}
    </div>
  );
};

type ItemProps = {
  item: ItemFilterType;
  type: itemType;
  isLast: boolean;
  onChange: (value: string) => void;
};
const Item = ({ item, onChange, type, isLast }: ItemProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleClick = () => {
    setChecked(!checked);
    onChange(item.value);
  };
  return (
    <div key={item.value} className="flex items-center">
      {type === "button" ? (
        <button
          onClick={handleClick}
          className={`mr-2 w-full text-start p-2  ${isLast ? "" : "border-b"} border-neutral-200`}
        >
          {item.label}
        </button>
      ) : (
        <>
          <CheckBox
            variant="outline"
            size="sm"
            type="checkbox"
            checked={checked}
            onChange={handleClick}
            className="mr-2 accent-primary"
          />
          <p className="text-lg">{item.label}+</p>
        </>
      )}
    </div>
  );
};

export default Items;
