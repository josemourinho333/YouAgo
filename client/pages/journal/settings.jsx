import Router from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../../components/Dashboard/layout';
import { useAuth } from '../../context/AuthContext';
import Head from 'next/head';

const Settings = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      Router.push('/login');
    }
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-4xl shadow-2xl bg-base-100">
          <div className="card-body gap-y-5">
            <p className="font-bold text-xl text-secondary">Changing settings feature will be coming soon!</p>
            <h1 className="font-bold text-3xl lg:text-5xl text-neutral">Settings</h1>
            <div className="flex flex-col gap-y-3">
              <div className="font-bold text-xl text-neutral">Send me emails...</div>
              <div className="flex flex-row gap-x-2">
                <div className="form-control">
                  <label className="label cursor-pointer gap-x-2">
                    <span className="label-text">In a year</span> 
                    <input type="radio" name="radio-10" className="radio checked:bg-info" checked />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer gap-x-2">
                    <span className="label-text">In 6 months</span> 
                    <input type="radio" name="radio-10" className="radio checked:bg-info" />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer gap-x-2">
                    <span className="label-text">In 3 months</span> 
                    <input type="radio" name="radio-10" className="radio checked:bg-info" />
                  </label>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl text-neutral">Name (This will be used in the email for you and can&rsquo;t be changed)</span>
              </label>
              <input disabled type="text" placeholder={currentUser.displayName} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl text-neutral">Email</span>
              </label>
              <input disabled type="text" placeholder={currentUser.email} className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className={`btn btn-disabled btn-primary`}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings;

Settings.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Head>
        <title>You&rsquo;reAgo - Settings</title>
      </Head>
      {page}
    </Layout>
  )
}