function QuoteForm() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Get Your Free Quote</h1>
            <div className="card p-4 shadow">
                <input className="form-control mb-3" placeholder="Your address" />
                <button className="btn btn-primary w-100">Get Quote</button>
            </div>
        </div>
    )
}
export default QuoteForm;