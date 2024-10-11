import React, { useState } from "react";
import Plus from "../assets/plus.png";
import Minus from "../assets/minus.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png"
import Twitter from "../assets/twitter.png"
import Youtube from "../assets/youtube.png"

function ContactUs() {
  const [Shop, SetShop] = useState(false);
  const [LifeStyle, SetLifeStyle] = useState(false);
  const [Support, SetSupport] = useState(false);
  const [Company, SetCompany] = useState(false);

  function ClickShop() {
    if (Shop) {
      SetShop(false);
    } else {
      SetShop(true);
    }
  }

  function ClickLifeStyle() {
    if (LifeStyle) {
      SetLifeStyle(false);
    } else {
      SetLifeStyle(true);
    }
  }

  function ClickSupport() {
    if (Support) {
      SetSupport(false);
    } else {
      SetSupport(true);
    }
  }

  function ClickCompany() {
    if (Company) {
      SetCompany(false);
    } else {
      SetCompany(true);
    }
  }

  return (
    <div>
      <div className=" bg-hardbluegray py-10 max-[880px]:hidden">
        <div className=" flex justify-around flex-wrap px-6 max-[880px]:hidden">
          <div className="mb-4 text-lightgray">
            <h1 className="mb-2 text-lg font-semibold">SHOP</h1>
            <ul className="font-semibold ">
              <li className="cursor-pointer hover:underline">
                Personal blenders
              </li>
              <li className="cursor-pointer hover:underline">
                Full-Sized blenders
              </li>
              <li className="cursor-pointer hover:underline">All blenders</li>
              <li className="cursor-pointer hover:underline">magic bullet</li>
              <li className="cursor-pointer hover:underline">Baby</li>
              <li className="cursor-pointer hover:underline">Juicers</li>
              <li className="cursor-pointer hover:underline">Accessories</li>
            </ul>
          </div>
          <div className=" text-lightgray">
            <h1 className="mb-2 text-lg font-semibold">LIFESTYLE</h1>
            <ul className="font-semibold">
              <li className="cursor-pointer hover:underline">Recipes</li>
              <li className="cursor-pointer hover:underline">Blog</li>
              <li className="cursor-pointer hover:underline">
                Getting started
              </li>
            </ul>
          </div>
          <div className="mb-4 text-lightgray">
            <h1 className="mb-2 text-lg font-semibold">SUPPORT</h1>
            <ul className="font-semibold">
              <li className=" cursor-pointer hover:underline">FAQ</li>
              <li className=" cursor-pointer hover:underline">Order Status</li>
              <li className=" cursor-pointer hover:underline">Shipping</li>
              <li className=" cursor-pointer hover:underline">Returns</li>
              <li className=" cursor-pointer hover:underline">Warranty</li>
              <li className=" cursor-pointer hover:underline">Contact Us</li>
              <li className=" cursor-pointer hover:underline">
                California Proposition 65
              </li>
              <li className=" cursor-pointer hover:underline">
                California Assembly Bill No. 1200
              </li>
            </ul>
          </div>
          <div className=" text-lightgray">
            <h1 className="mb-2 text-lg font-semibold">COMPANY</h1>
            <ul className="font-semibold">
              <li className=" cursor-pointer hover:underline">About Us</li>
              <li className=" cursor-pointer hover:underline">Press</li>
              <li className=" cursor-pointer hover:underline">Bullet Brands</li>
              <li className=" cursor-pointer hover:underline">
                BCRF Partnership
              </li>
              <li className=" cursor-pointer hover:underline">
                Student Discount
              </li>
              <li className=" cursor-pointer hover:underline">
                Sustainability
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-lightgray mb-2 text-lg font-semibold">
              SUBSCRIBE
            </h1>
            <h1 className="text-lightgray">Email</h1>
            <div className="bg-transparent">
              <input
                className=" text-lightgray outline-none bg-hardbluegray border-b-2 border-b-lightgray border-hardbluegray"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-darkblue py-4 px-10 flex justify-between ">
        <div>
          <h2 className="text-lightgray">
            ©2024 nutribullet, LLC. All rights reserved.
          </h2>
        </div>
        <div className="flex justify-around items-center w-52 flex-wrap">
          <img className="w-8 cursor-pointer " src={Facebook} alt="" />
          <img className="w-8 cursor-pointer" src={Instagram} alt="" />
          <img className="w-8 cursor-pointer" src={Twitter} alt="" />
          <img className="w-8 cursor-pointer" src={Youtube} alt="" />
        </div>
      </div>
      <div className=" bg-hardbluegray hidden justify-center items-center flex-col p-10 max-[880px]:flex ">
        <div className="w-full">
          <h1 className="text-lightgray mb-2 text-lg font-semibold">
            SUBSCRIBE
          </h1>
          <h1 className="text-lg text-lightgray">Email</h1>
          <div className="">
            <input
              className=" text-lightgray outline-none bg-hardbluegray border-b-2 border-b-lightgray border-hardbluegray w-full"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div className="mt-10 w-full border-b-2 border-b-darkblue pb-2">
          <div className=" flex ">
            <button
              className="w-full items-center flex flex-row justify-between"
              onClick={ClickShop}
            >
              <h1 className="mb-2 text-lg font-semibold text-lightgray">
                SHOP
              </h1>
              {Shop ? (
                <img className="w-4" src={Minus} alt="" />
              ) : (
                <img className="w-4" src={Plus} alt="" />
              )}
            </button>
          </div>
          {Shop && (
            <ul className="text-lightgray font-semibold ">
              <li className="cursor-pointer hover:underline">
                Personal blenders
              </li>
              <li className="cursor-pointer hover:underline">
                Full-Sized blenders
              </li>
              <li className="cursor-pointer hover:underline">All blenders</li>
              <li className="cursor-pointer hover:underline">magic bullet</li>
              <li className="cursor-pointer hover:underline">Baby</li>
              <li className="cursor-pointer hover:underline">Juicers</li>
              <li className="cursor-pointer hover:underline">Accessories</li>
            </ul>
          )}
        </div>
        <div className="mt-10 w-full border-b-2 border-b-darkblue pb-2">
          <div className=" flex ">
            <button
              className="w-full items-center flex flex-row justify-between"
              onClick={ClickLifeStyle}
            >
              <h1 className="mb-2 text-lg font-semibold text-lightgray">
                LIFESTYLE
              </h1>
              {LifeStyle ? (
                <img className="w-4" src={Minus} alt="" />
              ) : (
                <img className="w-4" src={Plus} alt="" />
              )}
            </button>
          </div>
          {LifeStyle && (
            <ul className="text-lightgray font-semibold ">
              <li className="cursor-pointer hover:underline">Recipes</li>
              <li className="cursor-pointer hover:underline">Blog</li>
              <li className="cursor-pointer hover:underline">
                Getting started
              </li>
            </ul>
          )}
        </div>
        <div className="mt-10 w-full border-b-2 border-b-darkblue pb-2">
          <div className=" flex ">
            <button
              className="w-full items-center flex flex-row justify-between"
              onClick={ClickSupport}
            >
              <h1 className="mb-2 text-lg font-semibold text-lightgray">
                SUPPORT
              </h1>
              {Support ? (
                <img className="w-4" src={Minus} alt="" />
              ) : (
                <img className="w-4" src={Plus} alt="" />
              )}
            </button>
          </div>
          {Support && (
            <ul className="text-lightgray font-semibold ">
              <li className=" cursor-pointer hover:underline">FAQ</li>
              <li className=" cursor-pointer hover:underline">Order Status</li>
              <li className=" cursor-pointer hover:underline">Shipping</li>
              <li className=" cursor-pointer hover:underline">Returns</li>
              <li className=" cursor-pointer hover:underline">Warranty</li>
              <li className=" cursor-pointer hover:underline">Contact Us</li>
              <li className=" cursor-pointer hover:underline">
                California Proposition 65
              </li>
              <li className=" cursor-pointer hover:underline">
                California Assembly Bill No. 1200
              </li>
            </ul>
          )}
        </div>
        <div className="mt-10 w-full border-b-2 border-b-darkblue pb-2">
          <div className=" flex ">
            <button
              className="w-full items-center flex flex-row justify-between"
              onClick={ClickCompany}
            >
              <h1 className="mb-2 text-lg font-semibold text-lightgray">
                COMPANY
              </h1>
              {Company ? (
                <img className="w-4" src={Minus} alt="" />
              ) : (
                <img className="w-4" src={Plus} alt="" />
              )}
            </button>
          </div>
          {Company && (
            <ul className="text-lightgray font-semibold ">
              <li className=" cursor-pointer hover:underline">About Us</li>
              <li className=" cursor-pointer hover:underline">Press</li>
              <li className=" cursor-pointer hover:underline">Bullet Brands</li>
              <li className=" cursor-pointer hover:underline">
                BCRF Partnership
              </li>
              <li className=" cursor-pointer hover:underline">
                Student Discount
              </li>
              <li className=" cursor-pointer hover:underline">
                Sustainability
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
