import image1 from "../andyrobertson.jpg"
import image2 from "../salah.jpg"
import image3 from "../vvd.jpg"

export default function ContactCard({ contact }) {
    return (

        <div className="card">
            <div className="row">
                <div className="pic col-4 col-md-4"><img className="img-fluid rounded-start" src={image1} alt="" /></div>
                <div className="card-body col-8 ">
                    <div className="card-title display-6">{contact.fullName}</div>
                    <div className="card-text">{contact.email}</div>
                </div>
            </div>
        </div>
    );
}
