import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center">
        <Image className="h-52" width={500} height={300} src="spinner.svg" alt="loading..." />
    </div>
  )
}
