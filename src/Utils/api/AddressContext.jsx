import { useContext, createContext, useState } from "react";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
    const [isAddressModelVisible, setIsAddressModelVisible] = useState(false);
    const [editAddress, setEditAddress] = useState({});

    return (
        <AddressContext.Provider
            value={{ isAddressModelVisible, setIsAddressModelVisible, editAddress, setEditAddress }}
        >
            {children}
        </AddressContext.Provider>
    );
};

export const useAddressContext = () => {
    return useContext(AddressContext);
};
