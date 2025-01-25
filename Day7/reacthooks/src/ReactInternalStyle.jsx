const Header = () =>
{
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif",
    };

    return(
        <>
        <h1 style={myStyle}>This is Internal CSS</h1>
        <p> Add a little style</p>
        </>
    );
}
export default Header;
