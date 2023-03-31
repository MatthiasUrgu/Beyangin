import s from './style.module.scss'

function Error() {
   return <div class={`${s.error} ${s.errorSerious}`}>
  Oh no! You've been hacked!
</div>
    
}
export default Error;