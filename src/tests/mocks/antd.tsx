
export const Layout = ({ children }: any) => <div>{children}</div>
Layout.Content = ({ children }: any) => <div>{children}</div>

export const Space = ({ children }: any) => <div>{children}</div>
export const Tag = ({ children }: any) => <span>{children}</span>
export const Switch = ({ checked, onChange }: any) => (
  <button onClick={onChange}>{checked ? 'ON' : 'OFF'}</button>
)
export const Drawer = ({ open, children }: any) => (open ? <div>{children}</div> : null)
export const Divider = () => <hr />
export const Progress = ({ percent }: any) => <div>Progress: {percent}%</div>

export const Descriptions = ({ children }: any) => <div>{children}</div>
Descriptions.Item = ({ label, children }: any) => (
  <div>
    <strong>{label}</strong>: {children}
  </div>
)

export const Row = ({ children }: any) => <div>{children}</div>
export const Col = ({ children }: any) => <div>{children}</div>

export const Card = ({ children }: any) => <div>{children}</div>

export const Input: any = (props: any) => <input {...props} />
Input.Search = ({ value, onChange }: any) => (
  <input
    placeholder="Buscar produto por nome"
    value={value}
    onChange={onChange}
  />
)

export const Skeleton = ({ children }: any) => <div>{children || 'loading...'}</div>
Skeleton.Input = () => <div />
Skeleton.Button = () => <div />
Skeleton.Avatar = () => <div />
