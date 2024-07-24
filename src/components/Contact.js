const Contact = ()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input type="text" className="p-2 m-2 border border-black rounded" placeholder="Name" />
                <input type="text"  className="p-2 m-2 border border-black rounded"  placeholder="Message"/>
                <button  className="p-2 m-2 border border-black rounded bg-gray-300">Submit</button>
            </form>
        </div>
    )
}

export default Contact;