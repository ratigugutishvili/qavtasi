import Logo from "../Logo.svg"

export default function Header(){
    return (
        <header>
            <img src={Logo} alt="" srcset="" />
            <div className="main">
                <a href="x">მთავარი</a>
                <a href="x">პროდუქცია</a>
                <a href="x">ბლოგი</a>
                <a href="x">გამოხმაურება</a>
                <a href="x">ჩვენს შესახებ</a>
                <a href="x">კონტაქტი</a>
            </div>
        </header>
    )
}