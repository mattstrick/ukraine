import Link from "next/link";
import Image from "next/image";

/*
Button Component
Props to parse (all optional)
- onClick: for opening up the OrgPage modal
- value: for the button text
- href: for the external URL
- target: target attribute of <a>
- icon: for leading icon of button 
*/

export default function Button ({onClick, value, href, target, icon}) {
    return (
        <a 
            {...(onClick != '' && {onClick})} 
            {...(href != '' && {href})} 
            {...(target != '' && {target})}
            className="w-full cursor-pointer"
        >
            <div className="flex justify-center 
                w-full py-3 rounded-2xl
                bg-[#005BBC] text-white
                hover:bg-[#1E429F]
                focus:border-4 focus:border-[#1E429F]
                text-lg font-bold leading-6
            ">
                {icon && 
                    <div className="w-3 mr-3 flex justify-center">
                        <Image 
                            src={icon}
                            alt={value}
                            layout="intrinsic"
                        />
                    </div>
                }
                {value}
            </div>
        </a>
    )
}