import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import CharacterCard from '../component/CharacterCard';

const CharacterList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await actions.loadCharacterList();
                console.log("store.people:", store.people)
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className="grid-container">
            {store.people.map((element) => (
                <CharacterCard key={element.url} element={element} />
            ))}
        </div>
    );
}

export default CharacterList;