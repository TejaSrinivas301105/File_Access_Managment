import { Router } from 'express'
import {
    File_upload,
    request_access,
    admin_approve,
    admin_reject,
    check_access,
    get_pending_requests,
    get_my_files
} from '../Controllers/File_System_control.js'
import { adminOnly, authenticate } from '../MiddleWares/File_Auth_middle.js'

const router = Router()

// Admin routes
router.post('/upload', authenticate, adminOnly, File_upload)
router.get('/requests', authenticate, adminOnly, get_pending_requests)
router.post('/approve', authenticate, adminOnly, admin_approve)
router.post('/reject', authenticate, adminOnly, admin_reject)

// Employee routes
router.post('/request-access', authenticate, request_access)
router.post('/access-file', authenticate, check_access)
router.get('/my-files', authenticate, get_my_files)

export default router
