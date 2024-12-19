import React from "react";
import Button from "../components/Button";
import LogoComponent from "../components/LogoComponent";

function Register() {
    return (
        <div className="grid row-1 cols-2">
            <div>
                <LogoComponent></LogoComponent>
            </div>
            <form action="POST">
                <Button name={Register} />
            </form>
        </div>
    );
}

export default Register;
