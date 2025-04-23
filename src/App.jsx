import TeamMemberCard from "./components/TeamMemberCard";
function App(){
  return(
    <div style={{align: 'center', padding: 15}}>
      <h1>Team-Showcase</h1>
      <TeamMemberCard Name= "John Doe" Title= "Software Engineer"/>
      <TeamMemberCard Name="Sanskar" Title= "Software Engineer"/>
    </div>
  )
};
export default App;