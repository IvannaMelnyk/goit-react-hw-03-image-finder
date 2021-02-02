export default function EmptyField({ texterror }) {
  return (
    <div role="alert" style={{ textAlign: 'center' }}>
      <p>We're sorry but something went wrong {texterror}</p>
    </div>
  );
}
