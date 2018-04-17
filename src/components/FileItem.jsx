import preact from 'preact'
import prettyHash from 'pretty-hash'
import filesize from 'filesize'
const humansize = filesize.partial({round: 0})

const FileItem = ({fileRef, ipfsRef, children}) => {
  return (
    <div className='dt dt--fixed pv2 ph3 bt b--near-white'>
      <div className='dtc lh-tight v-mid'>
        <div className='mid-gray f5 fw5 truncate'>{fileRef.name}</div>
        <div className='f7 pt1'>
          <span className='dib moon-gray pr2'>{humansize(fileRef.size)}</span>
          { !ipfsRef ? null : (
            <a className='link dib blue o-70 glow pointer' href={`http://ipfs.io/ipfs/${ipfsRef.hash || ipfsRef.multihash}`} target='_blank'>
              {prettyHash(ipfsRef.hash || ipfsRef.multihash)}
            </a>
          ) }
        </div>
      </div>
      {children}
    </div>
  )
}

export default FileItem