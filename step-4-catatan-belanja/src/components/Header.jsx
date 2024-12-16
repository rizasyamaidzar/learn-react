export default function Header(){
    return(
        <>
        <div
    className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 dark:from-gray-500 dark:via-gray-600 dark:to-gray-500 py-8 md:py-16">
    <div className="flex flex-col gap-3">

        <img src="https://tailwindflex.com/public/images/profile/1.png" className="object-cover w-14 h-14 rounded-full m-auto" alt="User image" id="user_image" />

        <p className="text-3xl font-bold text-center text-white">
            Catatan Belanja-KU
        </p>

        <p className="text-center text-gray-200">
            yukk dicatat biar ga lupa!
        </p>

        <div className="flex justify-center max-w-sm gap-2 mx-auto">

            <a href="#">
                <img src="https://tailwindflex.com/public/images/icons/github.svg" className="object-cover w-6 h-6  m-auto" title="github" />
            </a>

            <a href="#">
                <img src="https://tailwindflex.com/public/images/icons/linkedin.png" className="object-cover w-6 h-6  m-auto" title="linkedin" />
            </a>

            <a href="#">
                <img src="https://tailwindflex.com/public/images/icons/website.svg" className="object-cover w-6 h-6  m-auto" title="website" />
            </a>

            <a href="#">
                <img src="https://tailwindflex.com/public/images/icons/instagram.svg" className="object-cover w-6 h-6  m-auto" title="instagram" />
            </a>

        </div>
    </div>
</div>
        </>
    )
}