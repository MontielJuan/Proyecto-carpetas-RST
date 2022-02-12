import React, { useEffect, useState } from 'react';

export const SelectCity = ({data, setFilteredData, cambiarEstado}) => {

    const [city, setCity] = useState("Open this select menu")

    const [categorias, setCategorias] = useState([])

    const handleChange = (event) => {
        event.preventDefault()
        setCity(event.target.value)
        cambiarEstado();
    }

    useEffect(() => {
        if(data !== undefined && city !== "Open this select menu") {
          setFilteredData(data.filter((dato) => dato.Ciudad === city))
        }

        if(data !== undefined && city === "Open this select menu"){
            setFilteredData(data)
            setCategorias([ ...new Set(data.map((dato) => dato.Ciudad))]);
        }

      },[setFilteredData,city,data])


  return (
    <>
        <div className="caja" onChange={handleChange}>
            <select className="form-select">
            <option defaultValue>Open this select menu</option>
                { data && (
                    categorias.map((dato) => {
                        return (
                            <option key={dato}>{dato}</option>
                        )
                    }))
                }
            </select>
        </div>
    </>
  );
}