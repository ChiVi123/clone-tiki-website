import React from 'react'
import { IconCategory, IconCustomer, IconOrder, IconProduct } from '../icon'

export default function MenuDashboard() {
    return (
        <div>
            <div className="flex justify-around">
                <div>
                    <IconCustomer />
                </div>
                <div>
                    <IconOrder />
                </div>
                <div>
                    <IconProduct />
                </div>
                <div>
                    <IconCategory />
                </div>
            </div>

        </div>
    )
}
