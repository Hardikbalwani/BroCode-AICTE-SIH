import React from 'react';

const Notice = () => {
  const notices = [
    {
      title: 'COVID-19 Vaccination Drive',
      content: 'The government is launching a mass COVID-19 vaccination drive. All eligible citizens are encouraged to get vaccinated to help combat the spread of the virus.',
    },
    {
      title: 'Road Closure Announcement',
      content: 'A section of Main Street will be closed for maintenance from September 15th to September 20th. Please use alternative routes during this period announce a new recycling program starting on.',
    },
    {
      title: 'Public Meeting on Environmental Conservation',
      content: 'Join us for a public meeting on September 30th at the Town Hall to discuss strategies for environmental conservation in our community.',
    },
    {
      title: 'Tax Filing Deadline Extended',
      content: 'Due to exceptional circumstances, the deadline for filing income taxes has been extended to October 15th. Ensure your taxes are filed on time.',
    },
    {
      title: 'Emergency Preparedness Workshop',
      content: 'Don\'t miss our upcoming emergency preparedness workshop on October 5th. Learn how to stay safe during natural disasters and emergencies.',
    },
    {
      title: 'New Recycling Program',
      content: 'We are excited to announce a new recycling program starting on September 25th. Learn how you can participate and contribute to a greener future.',
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Notices</h1>
      <div className="row">
        {notices.map((notice, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title text-primary">{notice.title}</h5>
                <hr className="my-2" />
                <p className="card-text">{notice.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
