import { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Select from './Components/Select';

function App() {
    const [companyName, setCompanyName] = useState("");
    const [companyType, setCompanyType] = useState("ct0");
    const [flujoType, setFlujoType] = useState("0");
    const [autoRespuestaType, setAutoRespuestaType] = useState("0");
    const [autoRespuestaList, setAutoRespuestaList] = useState([]);

    const companyTypeList = [
        {id: "ct0", value: "Seleccionar"},
        {id: "ct1", value: "Delivery"},
        {id: "ct2", value: "Social Listening"},
        {id: "ct3", value: "Mensajeria"}
    ];

    const flujoList ={
        "ct0": [],
        "ct1": [
            {id: "0", value: "Seleccionar"},
            {id: "f1", value: "Completo"},
            {id: "f2", value: "Responde y atiende"},
            {id: "f3", value: "Atiende"},
        ],
        "ct2": [
            {id: "0", value: "Seleccionar"},
            {id: "f1", value: "Clasifica y responde"},
            {id: "f2", value: "Responde"},
        ],
        "ct3": [
            {id: "0", value: "Seleccionar"},
            {id: "f1", value: "Clasifica y responde"},
            {id: "f2", value: "Responde"}]
        };

    const autoRespuestaControl = (evt) => {
        console.log("AutoRespuesta", evt.target.value);
        setFlujoType(evt.target.value);
        if (evt.target.value === "f2" && companyType === "ct1"){
            console.log("Opción F2 - delivery");
            setAutoRespuestaList([
                {id: "ar1", value: "Deshabilitado"},
                {id: "ar2", value: "Pedir datos y derivar"},
                {id: "ar3", value: "Manejo automático"},
            ]);
        } else if (evt.target.value === "f2" && (companyType === "ct2" || companyType === "ct3")) {
            console.log("Opción FF2");
            setAutoRespuestaList([
                {id: "ar1", value: "Deshabilitado"},
                {id: "ar3", value: "Clasificación automática"},
            ]);
        } else {
            console.log("NINGUNO");
            setAutoRespuestaList([]);
            setAutoRespuestaType("0");
        }
        console.log("autoRespuestaList", autoRespuestaList);
    };

    return (
        <div className="wrapper">
            <form action="" className="form">
                <Input
                    nameInput={"companyName"}
                    labelTitle={"Nombre de empresa"}
                    funcOnChange={(evt) => setCompanyName(evt.target.value)}
                    value={companyName}
                />

                <Select
                    nameInput={"typeCompany"}
                    labelTitle={"Tipo de empresa"}
                    funcOnChange={(evt) => {
                        setCompanyType(evt.target.value);
                        setFlujoType("0");
                    }}
                    valueOptionName={"id"}
                    labelOptionName={"value"}
                    options={companyTypeList}
                    value={companyType}
                />

                <Select
                    nameInput={"flujo"}
                    labelTitle={"Flujo"}
                    funcOnChange={autoRespuestaControl}
                    valueOptionName={"id"}
                    labelOptionName={"value"}
                    options={flujoList[companyType]}
                    value={flujoType}
                />

                {
                    flujoType !== "f1" &&
                    <Select
                        nameInput={"autoRespuesta"}
                        labelTitle={"Auto Respuesta"}
                        funcOnChange={(evt) => setAutoRespuestaType(evt.target.value)}
                        valueOptionName={"id"}
                        labelOptionName={"value"}
                        options={autoRespuestaList}
                        value={autoRespuestaType}
                    />
                }
            </form>

        </div>
    );
}

export default App;
