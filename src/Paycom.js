

import { Component } from "react";
import ShadowButton from "./components/atom/buttons/ShadowButton";



import NumberFormat from 'react-number-format';


export default class Payme extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="modalForm" id="submitform1" action="https://checkout.paycom.uz" method="POST" >
                <input type="hidden" name="merchant" value="621e19c42590be2d78408142" />
                <input type="hidden" name="account[login]" value="703897" />
                <input type="hidden" name="description" value="Description" />


                <input className="formInput" type="text" name="account[name]" placeholder="Ismingiz (Sizga qanday murojaat qilishimizni hohlaysiz?)" required />
                {/* <input className="formInput" type="text" name="account[number]" placeholder="Ismingiz (Sizga qanday murojaat qilishimizni hohlaysiz?)" required /> */}
                <NumberFormat format="+998 (##) ###-##-##" allowEmptyFormatting mask="_"/>

                <input type="hidden" name="amount" value="5000" />
                <input type="hidden" name="lang" value="ru" />
                <br />

                <ShadowButton text="To'lovni amalga oshirish" onclick={

                    () => {
                        var json = this.formToJSON(this.getElementBy("#submitform1"));
                        return document.location = json.endpoint + this.decode(this.jsonToString(json));

                    }
                } />
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
            c: "https://4215-213-230-112-146.eu.ngrok.io",
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



