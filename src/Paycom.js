

import { Component } from "react";
import ShadowButton from "./components/atom/buttons/ShadowButton";

// import fetch from 'sync-fetch';

import NumberFormat from 'react-number-format';


export default class Payme extends Component {
    constructor(props) {
        super(props);
        this.plan = props.plan;
    }

    render() {


        let number = "";
        var self = this;

        console.log(self.plan);



        return (
            <form className="modalForm" id="submitform1" action="https://checkout.paycom.uz" method="POST" onSubmit={(e) => {
                e.preventDefault();
            }} >
                <input type="hidden" name="merchant" value="621e19c42590be2d78408142" />
                <input type="hidden" name="account[login]" value="703897" />
                <input type="hidden" name="description" value="Description" />


                <input className="formInput" type="text" name="name" placeholder="Ismingiz (Sizga qanday murojaat qilishimizni hohlaysiz?)" required />
               
                <NumberFormat className="formInput" format="+998 (##) ###-##-##" name="number" onValueChange={(e, el) => {

                    number = e.value;
                }} allowEmptyFormatting mask="_" />

                <input type="hidden" name="amount" value="5000" />
                <input type="hidden" name="lang" value="ru" />
                <br />

                <div className="FormBtns">
                <ShadowButton text="To'lovni amalga oshirish" onclick={
                    (e) => {
                        const form = this.getElementBy("#submitform1");

                        const res = fetch("http://198.199.73.117/register",
                            {
                                method: "POST",
                                body: JSON.stringify(
                                    {
                                        name: form.querySelector('input[name="name"]').value,
                                        number: number,
                                        plan: self.plan
                                    }
                                ),
                            }
                        ).then(res => res.json().then(({data}) => {

                            console.log(data);
                            document.querySelector('input[name="account[login]"]').value = data.id;
                            document.querySelector('input[name="amount"]').value = data.amount;


                            var json = this.formToJSON(form);
                            console.log(json);
                            
                            return document.location = json.endpoint + this.decode(this.jsonToString(json));
                        }));

                    }
                } />

                <ShadowButton text="Ro'yxatdan o'tish" />
                </div>
            </form>
        );
    }




    getElementBy(selector) {
        var n;
        return (
            selector instanceof HTMLElement && (n = selector),
            "string" == typeof selector && (n = document.querySelector(selector)),
            n ? n : null
        )
    }

    formToJSON(form) {
        return {
            endpoint: form.action,
            m: form.querySelector('input[name="merchant"]').value,
            a: form.querySelector('input[name="amount"]').value,
            ac: {
                login: form.querySelector('input[name="account[login]"]').value,
            },
            l: form.querySelector('input[name="lang"]').value,
            description: form.querySelector('input[name="description"]').value,
            c: "http://206.189.10.175",
            ct: 1500
        };
    }


    jsonToString(json) {
        var t = "";

        return (
            Object.keys(json).forEach(
                (n) => {
                    json[n] && (
                        "ac" == n && "object" == typeof json[n] ?
                            Object.keys(json[n]).forEach((val) => {
                                json[n][val] && (
                                    t += (
                                        t ? ";" : ""
                                    ) + n + "." + val + "=" + json[n][val]
                                );
                            }) :
                            (
                                t += (
                                    t ? ";" : ""
                                ) + n + "=" + json[n]
                            )
                    )
                }
            ),
            t
        )
    }

    decode(str) {
        return btoa(
            encodeURIComponent(str).replace(
                /%([0-9A-F]{2})/g, (e, t) => {
                    return String.fromCharCode("0x" + t);
                }
            )
        )
    }

}



