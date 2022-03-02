import Image from "next/image";

export default function ImageCont(src, w, h, alt, caption) {
  return (
    <div className="py-4">
      <Image src={src} width={w} height={h} alt={alt} />
      <p className="text-sm italic">{caption}</p>
    </div>
  );
}
