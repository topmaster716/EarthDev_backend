import React from "react";


function Preloader(props) {
    return (
        <div className="preloader" id="preloader">
            <div className="preloader_icons">
                <div id="heart" className="preloader_icon">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path
                                d="M30.4531 15.6067C30.4531 25.0606 19.7804 33.8163 19.7804 33.8163C19.1568 34.328 18.1362 34.328 17.5126 33.8163C17.5126 33.8163 6.83984 25.0606 6.83984 15.6067C6.83996 9.08603 12.1259 3.80005 18.6465 3.80005C25.1671 3.80005 30.4531 9.08603 30.4531 15.6067Z"
                                fill="white"/>
                        </g>
                        <circle cx="18.3924" cy="15.3519" r="9.11999" fill="#17233E"/>
                        <path
                            d="M18.3923 23.8397L17.2857 22.7332C13.1756 19.0973 10.4883 16.6471 10.4883 13.6436C10.4883 11.1933 12.3852 9.29639 14.8355 9.29639C16.1792 9.29639 17.5228 9.92871 18.3923 10.9562C19.2617 9.92871 20.6054 9.29639 21.9491 9.29639C24.3993 9.29639 26.2963 11.1933 26.2963 13.6436C26.2963 16.6471 23.6089 19.0973 19.4988 22.7332L18.3923 23.8397Z"
                            fill="white"/>
                        <defs>
                            <filter id="filter0_d" x="3.83984" y="0.800049" width="29.6133" height="36.4"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="1.5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div id="leaf-icon" className="preloader_icon">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path
                                d="M30.4531 15.6067C30.4531 25.0606 19.7804 33.8163 19.7804 33.8163C19.1568 34.328 18.1362 34.328 17.5126 33.8163C17.5126 33.8163 6.83984 25.0606 6.83984 15.6067C6.83996 9.08603 12.1259 3.80005 18.6465 3.80005C25.1671 3.80005 30.4531 9.08603 30.4531 15.6067Z"
                                fill="white"/>
                        </g>
                        <circle cx="18.3924" cy="15.3519" r="9.11999" fill="#17233E"/>
                        <path
                            d="M23.2513 5.99023C23.2513 5.99023 21.7452 7.45143 20.1164 8.04054C8.05427 12.4035 13.1414 20.9056 13.3073 20.9336C13.3073 20.9336 13.9837 19.7557 14.8974 19.0839C20.6953 14.8215 21.8738 9.9154 21.8738 9.9154C21.8738 9.9154 20.5727 15.8191 15.4146 19.4925C14.2753 20.3034 13.5039 22.3 13.1774 24.2956C13.1774 24.2956 13.985 23.9693 14.3322 23.881C14.4676 22.9973 14.7508 22.1511 15.2294 21.3952C22.4385 22.2535 24.7996 16.4446 25.1081 14.419C25.8361 9.6351 23.2513 5.99023 23.2513 5.99023Z"
                            fill="white"/>
                        <defs>
                            <filter id="filter0_d" x="3.83984" y="0.800049" width="29.6133" height="36.4"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="1.5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div id="home-icon" className="preloader_icon">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path
                                d="M30.4531 15.6067C30.4531 25.0606 19.7804 33.8163 19.7804 33.8163C19.1568 34.328 18.1362 34.328 17.5126 33.8163C17.5126 33.8163 6.83984 25.0606 6.83984 15.6067C6.83996 9.08603 12.1259 3.80005 18.6465 3.80005C25.1671 3.80005 30.4531 9.08603 30.4531 15.6067Z"
                                fill="white"/>
                        </g>
                        <circle cx="18.3924" cy="15.3519" r="9.11999" fill="#17233E"/>
                        <path
                            d="M26.0982 13.9508C26.3848 13.6356 26.3571 13.1526 26.0365 12.8721L18.9717 6.69041C18.651 6.40998 18.1369 6.41586 17.823 6.70365L10.7341 13.2017C10.4202 13.4895 10.4048 13.9719 10.7 14.2788L10.8778 14.4639C11.1726 14.7708 11.6492 14.8073 11.9416 14.5454L12.4714 14.0709V21.0167C12.4714 21.4429 12.8167 21.7879 13.2425 21.7879H16.0058C16.4316 21.7879 16.7769 21.4429 16.7769 21.0167V16.1575H20.3014V21.0167C20.2953 21.4426 20.6 21.7876 21.0259 21.7876H23.9542C24.38 21.7876 24.7253 21.4426 24.7253 21.0164V14.1687C24.7253 14.1687 24.8717 14.2969 25.0522 14.4556C25.2324 14.614 25.6109 14.487 25.8974 14.1715L26.0982 13.9508Z"
                            fill="white"/>
                        <defs>
                            <filter id="filter0_d" x="3.83984" y="0.800049" width="29.6133" height="36.4"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="1.5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div id="plus-icon" className="preloader_icon">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path
                                d="M30.4531 15.6067C30.4531 25.0606 19.7804 33.8163 19.7804 33.8163C19.1568 34.328 18.1362 34.328 17.5126 33.8163C17.5126 33.8163 6.83984 25.0606 6.83984 15.6067C6.83996 9.08603 12.1259 3.80005 18.6465 3.80005C25.1671 3.80005 30.4531 9.08603 30.4531 15.6067Z"
                                fill="white"/>
                        </g>
                        <path
                            d="M27.7663 16.568C27.7663 21.6048 23.6832 25.688 18.6464 25.688C13.6095 25.688 9.52637 21.6048 9.52637 16.568C9.52637 11.5312 13.6095 7.448 18.6464 7.448C23.6832 7.448 27.7663 11.5312 27.7663 16.568Z"
                            fill="#17233E"/>
                        <path
                            d="M11.731 13.6084H15.6971V9.65196C15.6971 9.10657 16.1387 8.66382 16.6839 8.66382H20.6312C21.1755 8.66382 21.617 9.10645 21.617 9.65196V13.6075H25.5623C26.1086 13.6075 26.5502 14.0492 26.5502 14.5956V18.5491C26.5502 19.0965 26.1086 19.5391 25.5623 19.5391H21.617V23.4837C21.617 24.0301 21.1754 24.4718 20.6312 24.4718H16.6839C16.1387 24.4718 15.6971 24.0301 15.6971 23.4837V19.5391H11.731C11.1848 19.5391 10.7422 19.0965 10.7422 18.5491V14.5956C10.7422 14.0501 11.1848 13.6084 11.731 13.6084Z"
                            fill="white"/>
                        <defs>
                            <filter id="filter0_d" x="3.83984" y="0.800049" width="29.6133" height="36.4"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="1.5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div id="paw-icon" className="preloader_icon">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path
                                d="M30.4531 15.6067C30.4531 25.0606 19.7804 33.8163 19.7804 33.8163C19.1568 34.328 18.1362 34.328 17.5126 33.8163C17.5126 33.8163 6.83984 25.0606 6.83984 15.6067C6.83996 9.08603 12.1259 3.80005 18.6465 3.80005C25.1671 3.80005 30.4531 9.08603 30.4531 15.6067Z"
                                fill="white"/>
                        </g>
                        <circle cx="18.3924" cy="15.3519" r="9.11999" fill="#17233E"/>
                        <g clipPath="url(#clip0)">
                            <path
                                d="M21.0556 14.8593C20.4264 13.8777 19.3547 13.2915 18.1888 13.2915C17.0229 13.2915 15.9512 13.8777 15.322 14.8593L13.8058 17.2247C13.5542 17.6171 13.4381 18.0705 13.47 18.5356C13.5019 19.0008 13.6789 19.4339 13.9818 19.7886C14.2849 20.1429 14.6854 20.3851 15.14 20.489C15.5946 20.5929 16.0606 20.5485 16.4876 20.3608L16.5162 20.3482C17.5906 19.8853 18.8182 19.8896 19.8898 20.3608C20.1663 20.4824 20.4591 20.5438 20.7547 20.5438C20.9153 20.5438 21.077 20.5256 21.2371 20.4891C21.6917 20.3853 22.0922 20.1431 22.3954 19.7887C22.6984 19.4344 22.8755 19.0011 22.9075 18.5358C22.9395 18.0705 22.8235 17.6172 22.5719 17.2246L21.0556 14.8593Z"
                                fill="white"/>
                            <path
                                d="M14.214 14.8562C14.6651 14.6829 15.0077 14.3194 15.1789 13.8326C15.3418 13.3694 15.3285 12.8464 15.1412 12.3599C14.9539 11.8737 14.6131 11.4768 14.1817 11.2422C13.7284 10.9959 13.2305 10.9557 12.7802 11.1293C11.8742 11.4777 11.4584 12.5973 11.8535 13.6256C12.1691 14.4442 12.9051 14.9609 13.6493 14.9609C13.8393 14.9609 14.0298 14.9271 14.214 14.8562Z"
                                fill="white"/>
                            <path
                                d="M17.1564 13.003C18.289 13.003 19.2105 11.9532 19.2105 10.6628C19.2105 9.37206 18.289 8.32202 17.1564 8.32202C16.0239 8.32202 15.1025 9.37206 15.1025 10.6628C15.1025 11.9532 16.0239 13.003 17.1564 13.003Z"
                                fill="white"/>
                            <path
                                d="M20.7031 13.5779H20.7032C20.8774 13.6358 21.0552 13.6634 21.2322 13.6634C22.0582 13.6634 22.8632 13.0622 23.1703 12.1383C23.3472 11.6064 23.3356 11.0441 23.1376 10.5549C22.9304 10.0428 22.5464 9.67109 22.0563 9.50817C21.566 9.34526 21.0359 9.41322 20.5634 9.69936C20.112 9.9727 19.7661 10.4162 19.5894 10.9481C19.2165 12.07 19.7161 13.2498 20.7031 13.5779V13.5779Z"
                                fill="white"/>
                            <path
                                d="M25.0287 13.3048L25.0283 13.3045C24.2473 12.7275 23.0791 12.9776 22.4242 13.8623C21.7698 14.7474 21.8722 15.9373 22.6521 16.5147C22.9365 16.7254 23.2726 16.8261 23.6165 16.8261C24.216 16.8261 24.8397 16.5201 25.2567 15.9574C25.9109 15.0723 25.8087 13.8824 25.0287 13.3048V13.3048Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <filter id="filter0_d" x="3.83984" y="0.800049" width="29.6133" height="36.4"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="1.5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            <clipPath id="clip0">
                                <rect width="13.984" height="13.984" fill="white"
                                      transform="translate(11.7041 7.448)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div id="child-icon" className="preloader_icon">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path
                                d="M31.2128 15.6067C31.2128 25.0606 20.5401 33.8163 20.5401 33.8163C19.9165 34.328 18.8959 34.328 18.2723 33.8163C18.2723 33.8163 7.59961 25.0606 7.59961 15.6067C7.59973 9.08603 12.8857 3.80005 19.4062 3.80005C25.9268 3.80005 31.2128 9.08603 31.2128 15.6067Z"
                                fill="white"/>
                        </g>
                        <path
                            d="M28.1199 15.3519C28.1199 20.3887 24.0367 24.4719 18.9999 24.4719C13.963 24.4719 9.87988 20.3887 9.87988 15.3519C9.87988 10.3151 13.963 6.23193 18.9999 6.23193C24.0367 6.23193 28.1199 10.3151 28.1199 15.3519Z"
                            fill="#17233E"/>
                        <path
                            d="M19.1096 22.1093C18.9983 22.2651 18.8744 22.4125 18.7378 22.5492C18.0754 23.2118 17.1946 23.5767 16.2577 23.5767C15.3209 23.5767 14.4401 23.2118 13.7777 22.5492C12.4103 21.1814 12.4103 18.9557 13.7777 17.5879C13.9153 17.4503 14.0621 17.3258 14.2167 17.2145C13.8671 16.6619 13.5719 16.1093 13.3457 15.5773C13.3376 15.5581 13.33 15.5391 13.322 15.52C12.9309 15.7515 12.5689 16.0323 12.2396 16.3617C10.1102 18.4918 10.1102 21.9577 12.2396 24.0878C13.2712 25.1197 14.6428 25.688 16.1017 25.688C17.5605 25.688 18.9321 25.1197 19.9637 24.0878C20.2884 23.7629 20.5703 23.3977 20.8032 23.0043C20.7845 22.9964 20.7659 22.989 20.7471 22.981C20.2151 22.7547 19.6623 22.4592 19.1096 22.1093V22.1093Z"
                            fill="white"/>
                        <path
                            d="M23.8862 17.3875C23.0753 17.4826 22.332 17.8341 21.7755 18.3907L21.7535 18.4128C21.4808 18.6856 21.1193 18.8354 20.7348 18.8355C20.7348 18.8355 20.7346 18.8355 20.7345 18.8355C20.3499 18.8355 19.9884 18.6857 19.7165 18.4137L17.8648 16.5614C17.3039 16.0002 17.3039 15.0872 17.8649 14.5262L17.9684 14.4226C18.4917 13.8991 18.8286 13.1999 18.9325 12.434C18.2234 12.0071 17.5262 11.685 16.8969 11.498C15.4313 11.0627 14.6629 11.4321 14.2763 11.8188C13.6058 12.4895 13.5901 13.6903 14.2318 15.2001C14.7955 16.5261 15.8329 18.0009 17.078 19.2465C18.3232 20.4921 19.7976 21.5298 21.1232 22.0936C21.8606 22.4073 22.5243 22.564 23.0884 22.5639C23.6791 22.5639 24.1608 22.3922 24.5038 22.0491C24.891 21.6617 25.2607 20.8914 24.8224 19.4213C24.6348 18.792 24.3126 18.0957 23.8862 17.3875V17.3875Z"
                            fill="white"/>
                        <path
                            d="M26.4886 9.75608C25.7456 9.03329 24.7617 8.6455 23.7175 8.66462C22.6723 8.6836 21.7016 9.10737 20.9842 9.85786C20.3616 10.5092 19.9838 11.3629 19.9204 12.2619C19.8434 13.3528 19.3925 14.3623 18.6508 15.1044L18.5473 15.2078C18.3618 15.3934 18.3618 15.6941 18.5473 15.8797L20.3991 17.732C20.4882 17.8212 20.6091 17.8712 20.7352 17.8712C20.8612 17.8712 20.9821 17.8211 21.0712 17.7319L21.0941 17.709C21.8634 16.9394 22.9066 16.4767 24.0314 16.406C24.9733 16.3469 25.8599 15.9463 26.5278 15.2782C27.2671 14.5386 27.6703 13.5553 27.663 12.5093C27.6558 11.4636 27.2387 10.4858 26.4886 9.75608V9.75608Z"
                            fill="white"/>
                        <defs>
                            <filter id="filter0_d" x="4.59961" y="0.800049" width="29.6132" height="36.4"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="1.5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="preloader_line"></div>
            </div>
        </div>
    )
}

export default Preloader