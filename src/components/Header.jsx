function Header(props) {
    return(
        <>
        <header>
        <h1>Welcome {props.name} to the <span id="txt-red">CodeCraft</span> intranet</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="emp_mgmt.html">Employee Management</a></li>
            </ul>
        </nav> 
        </header></>
    ); 
}

export default Header;

