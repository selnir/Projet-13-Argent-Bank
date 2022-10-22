import React from "react";
import { useSelector } from "react-redux";
import {useState} from 'react'
import requestHandler from "../../utils/GenFetch";
import { nameIsCorrect} from '../../utils/formValidation'
import { useDispatch } from "react-redux";
import { getUserInfos } from "../../features/userProfile";

function ChangeNameModal ({closeChangeNameModal}) 

{
    const firstName = useSelector((state) => state.userProfile.firstName)
    const lastName = useSelector((state) => state.userProfile.lastName)
    const token = useSelector((state) => state.login.token)
    const [firsName, setFirstName] = useState('')
    const [newLastName, setLastName] = useState('')
    const dispatch = useDispatch()
    
    function handleChangeFirstName (e) {
        const input = document.getElementById('firstname')
        setFirstName(e.target.value)
        if (nameIsCorrect(e.target.value)) {
            input.style.border = 'solid 4px green'
        } else {
            input.style.border = 'solid 4px red'
        }
    }
    function handleChangeLastName (e) {
        const input = document.getElementById('lastname')
        setLastName(e.target.value)
        if (nameIsCorrect(e.target.value)) {
            input.style.border = 'solid 4px green' 
        } else {
            input.style.border = 'solid 4px red'
        }
    }

    const sendDataToBack = (e) => {
        e.preventDefault()
        const baseUrl = 'http://localhost:3001/api/v1'

        if (firsName && newLastName && nameIsCorrect(firsName) && nameIsCorrect(newLastName)) {
            const postApi = async () => {
                const bodyPost = {
                    firstName : firsName,
                    lastName : newLastName
                  }
                const response = await requestHandler({
                    url: `${baseUrl}/user/profile/`,
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer' + token
                        },
                    body: JSON.stringify(bodyPost),
                    errMsg: 'Fail to change user infos'
                });
                if (response?.status === 200) {
                    const newInfos = {
                        firstName : firsName,
                        lastName : newLastName
                    }
                    dispatch(getUserInfos(newInfos))
                    closeChangeNameModal()
                } else {
                    console.log(response)
                }
            };
            postApi();
        } 
        
    }
    return (
        <div className="changeNameModale"> 
        <form 
        onSubmit={sendDataToBack}
        method="POST">
        <div class="input-wrapper">
          <label for="firstname">firstName</label
          ><input 
          type="firstname" 
          id="firstname"
          placeholder={firstName}
          onChange={handleChangeFirstName} />
        </div>
        <div class="input-wrapper">
          <label for="lastname">lastName</label
          ><input 
          type="lastname" 
          id="lastname"
          placeholder={lastName}
          onChange={handleChangeLastName} />
          
        </div>
        <div className="cta-buttons">
            <button className=" edit-button" type="submit">Save</button>
            <button className=" edit-button "  onClick={closeChangeNameModal}>Cancel</button>
        </div>

      </form>
        </div>
    )
} export default ChangeNameModal