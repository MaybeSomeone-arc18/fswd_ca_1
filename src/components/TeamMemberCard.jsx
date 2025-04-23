const TeamMemberCard = ({Name, Title})=>{

    return(
    <div style={{padding: 15, margin: 15, border: '1px solid #ccc', borderRadius:10}}>
        <h1>{Name}</h1>
        <p>{Title}</p>
    </div>
    )
};
export default TeamMemberCard;