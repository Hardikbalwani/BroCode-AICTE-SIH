import React from "react";

const Section3 = () => {
    return (
        <div className="container-fluid mt-0">
            <div className="row">
                <div className="col-sm-12 text-center border border-warning animation-slideLeft">
                    <p className="p-2 d-block" style={{ letterSpacing: "1px", fontSize: "14px", fontWeight: "600" }}>
                        Please check the Announcement corner regularly for latest updates and information. <br />
                        For any technical queries, please contact Helpdesk at{" "}
                        <strong className="announcementText">
                            <i className="fa fa-envelope-o"></i> helpdesk[at]nsp[dot]gov[dot]in
                        </strong>{" "}
                        or{" "}
                        <strong className="announcementText">
                            <i className="fa fa-phone"></i> 0120 - 6619540
                        </strong>
                        <br />
                        <span className="text-primary">(from 8 AM to 8 PM on all days, excluding holidays)</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section3;
