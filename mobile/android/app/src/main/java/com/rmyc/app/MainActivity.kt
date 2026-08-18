package com.rmyc.app

import android.os.Bundle
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.button.MaterialButton
import com.google.android.material.card.MaterialCardView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnBookVessel = findViewById<MaterialButton>(R.id.btnBookVessel)
        val btnDining = findViewById<MaterialButton>(R.id.btnDining)

        btnBookVessel?.setOnClickListener {
            Toast.makeText(this, "Royal Madras Yacht Club: Vessel Slot Reserved!", Toast.LENGTH_SHORT).show()
        }

        btnDining?.setOnClickListener {
            Toast.makeText(this, "Harbour Lounge Table Reservation Confirmed!", Toast.LENGTH_SHORT).show()
        }
    }
}
