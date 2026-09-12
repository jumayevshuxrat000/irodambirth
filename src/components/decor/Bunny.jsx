/**
 * A small line-art bunny used as a living decoration around the page.
 * variant controls the idle animation: 'bounce' | 'sway' | 'jump' | 'wave' | 'sleep' | 'still'
 * hold controls a small accessory drawn in its hand: 'heart' | 'flower' | 'cake' | 'camera' | null
 */
export default function Bunny({
  variant = 'bounce',
  hold = null,
  size = 72,
  flip = false,
  tilt = 0,
  style = {},
  className = '',
}) {
  const animClass = variant === 'still' ? '' : `bunny--${variant}`

  return (
    <div
      className={`bunny ${animClass} ${className}`}
      style={{
        width: size,
        transform: flip ? 'scaleX(-1)' : undefined,
        '--tilt': `${tilt}deg`,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 110" width={size} height={size * 1.1}>
        {/* ears */}
        <g className="ear-left">
          <ellipse cx="34" cy="20" rx="9" ry="22" fill="#fff" stroke="#4a3540" strokeWidth="2.2" />
          <ellipse cx="34" cy="22" rx="4" ry="14" fill="#ffc7dd" />
        </g>
        <g className="ear-right">
          <ellipse cx="64" cy="20" rx="9" ry="22" fill="#fff" stroke="#4a3540" strokeWidth="2.2" />
          <ellipse cx="64" cy="22" rx="4" ry="14" fill="#ffc7dd" />
        </g>

        {/* head */}
        <circle cx="49" cy="52" r="26" fill="#fff" stroke="#4a3540" strokeWidth="2.2" />
        {/* cheeks */}
        <ellipse cx="35" cy="58" rx="5.5" ry="4" fill="#ffd6e6" />
        <ellipse cx="63" cy="58" rx="5.5" ry="4" fill="#ffd6e6" />
        {/* eyes */}
        <circle cx="41" cy="50" r="2.4" fill="#4a3540" />
        <circle cx="57" cy="50" r="2.4" fill="#4a3540" />
        {/* mouth */}
        <path d="M45 60 Q49 64 53 60" stroke="#4a3540" strokeWidth="1.8" fill="none" strokeLinecap="round" />

        {/* body */}
        <ellipse cx="49" cy="92" rx="20" ry="16" fill="#fff" stroke="#4a3540" strokeWidth="2.2" />

        {/* arms */}
        <ellipse cx="31" cy="90" rx="5" ry="9" fill="#fff" stroke="#4a3540" strokeWidth="2" />
        <ellipse cx="67" cy="90" rx="5" ry="9" fill="#fff" stroke="#4a3540" strokeWidth="2" />

        {/* feet */}
        <ellipse cx="39" cy="106" rx="6" ry="4" fill="#fff" stroke="#4a3540" strokeWidth="2" />
        <ellipse cx="59" cy="106" rx="6" ry="4" fill="#fff" stroke="#4a3540" strokeWidth="2" />

        {hold === 'heart' && (
          <path
            d="M67 84c-3-4-9-2-9 3 0 4 5 7 9 10 4-3 9-6 9-10 0-5-6-7-9-3z"
            fill="#e0699e"
          />
        )}
        {hold === 'flower' && (
          <g transform="translate(66,80)">
            <circle cx="0" cy="-4" r="3" fill="#ffc7dd" />
            <circle cx="4" cy="0" r="3" fill="#ffc7dd" />
            <circle cx="-4" cy="0" r="3" fill="#ffc7dd" />
            <circle cx="0" cy="4" r="3" fill="#ffc7dd" />
            <circle cx="0" cy="0" r="2.4" fill="#f4a5c6" />
          </g>
        )}
        {hold === 'cake' && (
          <g transform="translate(60,82)">
            <rect x="0" y="6" width="16" height="9" rx="1.5" fill="#ffc7dd" />
            <rect x="0" y="3" width="16" height="4" fill="#fff" stroke="#4a3540" strokeWidth="1" />
            <line x1="8" y1="-2" x2="8" y2="3" stroke="#e0699e" strokeWidth="1.6" />
          </g>
        )}
        {hold === 'camera' && (
          <g transform="translate(62,84)">
            <rect x="0" y="0" width="18" height="12" rx="2" fill="#4a3540" />
            <circle cx="9" cy="6" r="4" fill="#ffc7dd" />
          </g>
        )}
      </svg>
      <div className="bunny-shadow" />
    </div>
  )
}
