"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface SlideProps {
  value?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SlideProps> = ({ value = 1, onChange }) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };
  return (
    <RadixSlider.Root
      className=" flex relative items-center w-full h-10 select-none touch-none cursor-pointer"
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label="Volume"
    >
      <RadixSlider.Track className=" bg-neutral-600 relative rounded-full h-[2px] grow">
        <RadixSlider.Range className=" absolute rounded-full h-full bg-white" />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
};

export default Slider;
