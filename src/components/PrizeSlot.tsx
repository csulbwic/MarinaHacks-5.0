type PrizeSlotProps = {
    caption: string;            // "Prize Name"
    placeholder?: string;       // "Prize Image"
    className?: string;         // optional extra classes
  };
  
  export default function PrizeSlot({ caption, placeholder = "Prize Image", className }: PrizeSlotProps) {
    return (
      <div className={className}>
        <div className="circle"></div>
        <div className="caption"></div>
      </div>
    );
  }
  