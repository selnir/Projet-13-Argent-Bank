import React from "react";
import { useDispatch, useSelector } from "react-redux";
import requestHandler from "../../utils/GenFetch";
import { getUserInfos } from "../../features/userProfile";
import { useState } from "react";
import ChangeNameModal from "../../component/ChangeNameModale/ChangeNameModale";

function User() {

  const dispatch = useDispatch()
    const token = useSelector((state) => state.login.token)
    const firstName = useSelector((state) => state.userProfile.firstName)
    const lastName = useSelector((state) => state.userProfile.lastName)
    const [changeName, setChangeName] = useState(false)

    const openChangeNameModale= () => {
        setChangeName(true)
    }
    const closeChangeNameModale = () => {
        setChangeName(false)
    }
    const postApi = async () => {
        const response = await requestHandler({
            url: `http://localhost:3001/api/v1/user/profile/`,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer' + token
                },
        });
        if (response.status === 200) {
            dispatch(getUserInfos(response.body))
            } 
        };
        postApi();


    return (<main class="main bg-dark">
    <div class="header">
    <h1>Welcome back {changeName ? (null) : <br />}{changeName ? (null) : firstName} {changeName ? (null) : lastName} !</h1>
            {changeName ? (<ChangeNameModal  closeChangeNameModal={closeChangeNameModale}/>) : false}
            {changeName ? (null) : <button onClick={openChangeNameModale} className=' edit-button'>Edit name</button>}
    </div>
    <h2 class="sr-only">Accounts</h2>
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">Argent Bank Checking (x8349)</h3>
        <p class="account-amount">$2,082.79</p>
        <p class="account-amount-description">Available Balance</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">Argent Bank Savings (x6712)</h3>
        <p class="account-amount">$10,928.42</p>
        <p class="account-amount-description">Available Balance</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
        <p class="account-amount">$184.30</p>
        <p class="account-amount-description">Current Balance</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
  </main>
    );
    }
    export default User;







