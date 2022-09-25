import { convertLength } from '@mui/material/styles/cssUtils';
import axios from 'axios';
import React, { useState, setState, useEffect } from 'react';
import RecommendedProducts from './recommendedProducts'
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import { options } from '../util/options'


import './style.css'
function RegistrationForm() {

    const [loading, setloading] = useState(false)
    const [recommend, setRecommend] = useState(false)
    const [error, setError] = useState({})
    const [age, setAge] = useState(null);
    const [income, setIncome] = useState(null);

    const [sexe, setSexe] = useState(null);
    const [ind_nuevo, setIndNuevo] = useState(null);
    const [indfall, setIndFall] = useState(null);
    const [ind_actividad_cliente, setIndActividadCliente] = useState(null);

    const [segmentation, setSegmentation] = useState(null);
    const [province, setProvince] = useState(null);
    const [canal_entrada, setCanalEntrada] = useState();
    const [CustomerRresidence, setCustomerRresidence] = useState(null);
    const [employee_index, setEmployeIndex] = useState(null);
    const [fecha_dato, setFechaDato] = useState();
    // let date = new Date();
    // const fecha_dato = "23242"
    const [recommendedProductsNames, setProducts] = useState("")

    const config =
    {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
        }
    }

    function getUserAccount() {
        setloading(true)
        if (age == null && income == null) {

        }
        let date=new Date()
        setFechaDato((date.getMonth()+1)+""+ date.getDate())
        const user2 = {
            "fecha_dato": fecha_dato,
            "EmployeeIndex": employee_index,
            "CustomerRresidence": CustomerRresidence,
            "sexe": sexe,
            "age": age,
            "ind_nuevo": ind_nuevo,
            "canal_entrada": canal_entrada,
            "indfall": indfall,
            "cod_prov": province,
            "ind_actividad_cliente": ind_actividad_cliente,
            "GrossIncome": income,
            "segmentation": segmentation
        }
        console.log(user2)
        return axios.post('http://127.0.0.1:5000/userRecommendation', user2, config)
            .then(function (response) {

                console.log(response.data);
                setProducts(response.data);
                console.log("---after state---" + recommendedProductsNames + "0000000");
                setRecommend(true)
                setloading(false)

            })
            .catch(function (error) {
                setloading(false)
                console.log(error);
                setError(error)
                alert(error.message)
            });
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "age") {
            setAge(value);
        }
        if (id === "income") {
            setIncome(value);
        }
        if (id === "male") {
            setSexe(value);
        }
        if (id === "female") {
            setSexe(value);
        }

        if (id === "ind_nuevo_oui") {
            setIndNuevo(value);
        }
        if (id === "ind_nuevo_non") {
            setIndNuevo(value);
        }
        if (id === "indfall_oui") {
            setIndFall(value);
        }
        if (id === "indfall_non") {
            setIndFall(value);
        }

        if (id === "non_actif") {
            setIndActividadCliente(value);
        }
        if (id === "actif") {
            setIndActividadCliente(value);
        }
        if (id === "segmentation") {
            setSegmentation(value);
        }
        if (id === "province") {
            setProvince(value);
        }
        if (id === "canal_entrada") {
            setCanalEntrada(value);
        }
        if (id === "CustomerRresidence") {
            setCustomerRresidence(value);
        }
        if (id === "employee_index") {
            setEmployeIndex(value);
        }
        
       
        // setFechaDato("4455")
        // console.log(fecha_dato)

    }
    let comp
    if (recommend) {
        comp = <RecommendedProducts product={recommendedProductsNames} />;
    } else {
        comp = <br></br>;
    }
    useEffect(() => {
        setProvince("0")
        setSegmentation("0")
        setEmployeIndex("0")
        setCanalEntrada("0")
        setCustomerRresidence("0")
    }, [])
    return (
        <div>

            <div className="form">
                <h1>User Information</h1>
                <div className="form-body">
                    <div className="age">
                        <label className="form__label" for="age">Age </label>
                        <input className="form__input" type="number" value={age} onChange={(e) => handleInputChange(e)} id="age" placeholder="18 ans " min="0" />
                    </div>

                    <div className="income">
                        <label className="form__label" for="income">Gross income </label>
                        <input className="form__input" type="number" value={income} onChange={(e) => handleInputChange(e)} id="income" placeholder="1000 DH " min="0" />
                    </div>
                    <div className="sexe">
                        <label className="form__label" for="gender">Gender </label>
                        <input type="radio" value="0" id="male" onChange={(e) => handleInputChange(e)} name="gender" />
                        <label for="male">Male &nbsp;&nbsp;&nbsp;&nbsp; </label>
                        <input type="radio" value="1" id="female" onChange={(e) => handleInputChange(e)} name="gender" />
                        <label for="female" className="r" >Female</label>


                    </div>

                    <div className="ind_nuevo">
                        <label className="form__label" for="ind_nuevo">the customer is registered in the last 6 months?
                        </label>
                        <input type="radio" value="1" id="ind_nuevo_oui" onChange={(e) => handleInputChange(e)} name="ind_nuevo" />
                        <label for="ind_nuevo_oui">Oui&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type="radio" value="0" id="ind_nuevo_non" onChange={(e) => handleInputChange(e)} name="ind_nuevo" />
                        <label for="ind_nuevo_non">Non</label>
                    </div>

                    <div className="ind_actividad_cliente">
                        <label className="form__label" for="ind_actividad_cliente">Activity index </label>
                        <input type="radio" value="1" id="actif" onChange={(e) => handleInputChange(e)} name="ind_actividad_cliente" />
                        <label for="actif">active customer&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type="radio" value="0" id="non_actif" onChange={(e) => handleInputChange(e)} name="ind_actividad_cliente" />
                        <label for="non_actif">inactive customer</label>
                    </div>


                    <div className="indfall">
                        <label className="form__label" for="indfall">Deceased index </label>
                        <input type="radio" value="1" id="indfall_oui" onChange={(e) => handleInputChange(e)} name="indfall" />
                        <label for="indfall_oui">Oui &nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type="radio" value="0" id="indfall_non" onChange={(e) => handleInputChange(e)} name="indfall" />
                        <label for="indfall_non">Non</label>
                    </div>
                    <div>
                        <label className="form__label" for="segmentation">Segmentation </label>
                        <select id="segmentation" value={segmentation} onChange={(e) => handleInputChange(e)} name="segmentation">
                            <option value="0">VIP</option>
                            <option value="1">Individuals </option>
                            <option value="2">college graduated</option>
                        </select>
                        <label className="form__label" for="province">Province </label>
                        <select id="province" value={province} onChange={(e) => handleInputChange(e)} name="province">
                            <option value="1" >ALAVA</option>
                            <option value="2">ALBACETE</option>
                            <option value="3">ALICANTE</option>
                            <option value="4">ALMERIA</option>
                            <option value="33">ASTURIAS</option>
                            <option value="5">AVILA</option>
                            <option value="6">BADAJOZ</option>
                            <option value="BALEARS, ILLES">BALEARS, ILLES</option>
                            <option value="48">BIZKAIA</option>
                            <option value="8">BARCELONA</option>


                        </select>
                    </div>


                    <div>
                        <label className="form__label" for="canal_entrada">channel used by the customer to join </label>
                        <select id="canal_entrada" value={canal_entrada} onChange={(e) => handleInputChange(e)} name="canal_entrada">
                            <option value="0">004</option>
                            <option value="1">007</option>
                            <option value="2">013</option>
                            <option value="3">K00</option>
                            <option value="4">KAA</option>
                            <option value="5">KAB</option>
                            <option value="KAC">KAC</option>
                            <option value="7">KAD</option>
                            <option value="9">KAF</option>
                            <option value="8">KAE</option>


                        </select>
                        <label className="form__label" for="CustomerRresidence">Customer residence </label>
                        <select id="CustomerRresidence" value={CustomerRresidence} onChange={(e) => handleInputChange(e)} name="CustomerRresidence">
                            <option value="0">AD</option>
                            <option value="2">AL</option>
                            <option value="1">AE</option>
                            <option value="3">AO</option>
                            <option value="4">AR</option>
                            <option value="5">AT</option>
                            <option value="6">AU</option>
                            <option value="7">BA</option>
                            <option value="8">BE</option>
                            <option value="9">BG</option>


                        </select>

                    </div>
                    <div>
                        <label className="l" for="employee_index">Employee index </label>
                        <select id="employee_index" value={employee_index} onChange={(e) => handleInputChange(e)} name="employee_index">
                            <option value="0"> A active</option>
                            <option value="1">B ex employed</option>
                            <option value="2">F filial</option>
                            <option value="3">N not employee</option>
                            <option value="4">P pasive</option>



                        </select>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>

                </div>
                <div class="footer">
                    {/* <button onClick={() => getUserAccount()} class="btn" disabled={loading}>{loading ? "loading..." : "submit"}</button> */}
                    <Button color="primary" onClick={() => getUserAccount()} disabled={loading} startDecorator={loading && <CircularProgress variant="solid" thickness={2} />}>
                        {loading ? "loading..." : "submit"}
                    </Button>
                </div>

            </div>
            {comp}
        </div>
    )
}
export default RegistrationForm;