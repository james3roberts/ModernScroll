import { useState } from "react";

const SetupScreen = ({onFinishSetup})=>{
    const [churchName, setChurchName]=useState('');
    const [pastorNames, setPastorNames]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //Save setup data(later to localStorage or backend)
        onFinishSetup({churchName, pastorNames});
    };

    return(
        <div className="setup-screen">
            <h2>Welcome to ModernScroll</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Church Name:
                    <input
                    type="text"
                    value={churchName}
                    onChange={(e) => setChurchName(e.target.value)}
                    required
                    />
                </label>
                <label>
                    Pastor(s) Name(s):
                    <input
                    type="text"
                    value={pastorNames}
                    onChange={(e)=>setPastorNames(e.target.value)}
                    placeholder="separate names with commas"
                    required
                    />
                </label>
                <button type="submit">Continue</button>
            </form>
        </div>
    );
};

export default SetupScreen;