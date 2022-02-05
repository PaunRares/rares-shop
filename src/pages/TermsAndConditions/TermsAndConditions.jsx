import React from 'react'
import Layout from '../../components/Layout/Layout';
import {Link} from 'react-router-dom';

function TermsAndConditions() {
    return (
        <div>
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <h2> Termeni și condiții </h2>
                    <p className="mt-2"> Ce sunt Acordurile de Termeni și Condiții?</p>
                    <p className="text-justify">
                    Un acord de Termeni și Condiții acționează ca contracte legale între dvs. (compania) care are site-ul web sau aplicația mobilă și utilizatorul care accesează site-ul/aplicația dvs.

A avea un acord de Termeni și Condiții este complet opțional. Nicio lege nu cere să aveți unul. Nici măcar regulamentul general de protecție a datelor ( GDPR ) foarte strict și cu anvergură largă.

Acordul dvs. de Termeni și Condiții va fi exclusiv al dvs. În timp ce unele clauze sunt standard și întâlnite în mod obișnuit în aproape fiecare acord de Termeni și condiții, depinde de dvs. să stabiliți regulile și liniile directoare pe care utilizatorul trebuie să le accepte.

Puteți considera acordul cu Termenii și condițiile ca fiind acordul legal în care vă mențineți drepturile de a exclude utilizatorii din aplicația dvs. în cazul în care aceștia abuzează de aplicația dvs., în care vă mențineți drepturile legale împotriva potențialilor abuzatori de aplicații și așa mai departe.

Acordurile privind Termenii și condițiile sunt cunoscute și sub denumirea de Termeni și condiții sau acorduri privind Termenii de utilizare. Acești termeni sunt interschimbabili, practic vorbind.
                    </p>
                    <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">
                        <p>Referință: termsfeed.com</p>
                    </a>
                    <Link to="/"><button className="btn btn-dark">Inapoi la home</button></Link>
                </div>
            </Layout>
        </div>
    )
}

export default TermsAndConditions