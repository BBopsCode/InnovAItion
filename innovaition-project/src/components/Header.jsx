export default function Header() {
  return (
    <header className="
      flex 
      justify-between 
      items-center 
      w-screen 
      p-4">
      <img
        src="/logos/InnovAItion.svg"
        alt="logo"
        className="w-60"
      />
      <div className="hidden md:flex gap-4">
        <button 
          className="
            btn 
            btn-link
            no-underline 
            text-black
            text-lg
            hover:bg-white
            border-none">
          Products
        </button>

        <button 
          className="
            btn 
            btn-link 
            no-underline
            text-black
            text-lg
            hover:bg-white
            border-none">
          Vision
        </button>

        <button 
          className="
            btn 
            btn-link 
            no-underline
            text-black
            text-lg
            hover:bg-white
            border-none">
          Contact
        </button>

        <button
          className="
            btn 
            btn-primary
            bg-black
            text-white 
            text-lg
            hover:bg-primary
            border-none">
          Follow
        </button>
      </div>
    </header>
  )
}