export default function ChildComponent(props) {
  console.log('ChildComponent');
  return <button onClick={props.onClick}>Click me</button>;
}
